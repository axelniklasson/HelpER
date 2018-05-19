from sklearn.externals import joblib
import numpy as np
from helpers import load_obj
from NetworkModel import RegressionModel
from data_generator import sample_input


def make_model(verbose=False):
	x = load_obj('x-50000-samples-14:00')
	y = load_obj('y-50000-samples-14:00')

	no_samples = x.shape[0]
	no_features = x.shape[1]

	mask = np.arange(0, no_samples)
	np.random.shuffle(mask)

	split_percent = 0.75
	split_ind = int(no_samples * split_percent)

	x_train = x[mask[0:split_ind]]
	y_train = y[mask[0:split_ind]]

	x_test = x[mask[split_ind:]]
	y_test = y[mask[split_ind:]]

	model = RegressionModel(no_hidden=300)
	model.fit(x_train, y_train)

	joblib.dump(model, 'model.pkl')
	if verbose:
		'Dumped model to disk'

	if verbose:
		print('Training score: {}'.format(model.score(x_train, y_train)))
		print('Testing score: {}'.format(model.score(x_test, y_test)))


def predict(category, rate):
	"""
	:param category: [1-7]
	:param rate: [1-4] 
	:return: 
	"""
	model = joblib.load('model.pkl')

	category_one_hot = np.zeros(8)
	category_one_hot[category-1] = 1

	rate_one_hot = np.zeros(4)
	rate_one_hot[rate-1] = 1

	hospital_one_hot = np.zeros(3)
	hospital_one_hot[0] = 1

	times = np.zeros_like(hospital_one_hot)
	queues = np.zeros_like(hospital_one_hot)
	for i in range(0, hospital_one_hot.shape[0]):
		queue, doctor_mean = sample_input()
		queues[i] = int(round(queue))
		feature_map = np.concatenate((np.array([queue]), doctor_mean, hospital_one_hot, category_one_hot, rate_one_hot))
		times[i] = model.predict(feature_map.reshape(1,-1))
		np.roll(hospital_one_hot, 1)

	return times, queues