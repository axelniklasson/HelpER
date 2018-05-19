from sklearn.externals import joblib
import numpy as np
from helpers import load_obj
from NetworkModel import RegressionModel
from data_generator import sample_input, generate_dataset


doctor_population_size = 1000
no_features = 10
no_hospitals = 3
doctor_range = (10, 100)
no_samples = 50000
no_symptoms = 8
no_rates = 4


def make_dataset():
	generate_dataset(doctor_population_size=doctor_population_size, no_doctor_features=no_features,
	                 no_doctors_range=doctor_range, no_hospitals=no_hospitals, no_rates=no_rates,
	                 no_symptoms=no_symptoms, no_samples=no_samples, filename='test')


def make_model(filename, verbose=False):
	x = load_obj('x-50000-samples-14:00')
	y = load_obj('y-50000-samples-14:00')

	no_samples = x.shape[0]

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

	joblib.dump(model, filename)
	if verbose:
		print('Dumped model to disk: {}'.format(filename))

	if verbose:
		print('Training score: {}'.format(model.score(x_train, y_train)))
		print('Testing score: {}'.format(model.score(x_test, y_test)))


def predict(category, rate):
	assert 1 <= category <= 7 and 1 <= rate <= 4

	model = joblib.load('model.pkl')

	category_one_hot = np.zeros(no_symptoms)
	category_one_hot[category-1] = 1

	rate_one_hot = np.zeros(no_rates)
	rate_one_hot[rate-1] = 1

	hospital_one_hot = np.zeros(no_hospitals)
	hospital_one_hot[0] = 1

	times = np.zeros_like(hospital_one_hot)
	queues = np.zeros_like(hospital_one_hot)
	for i in range(0, no_hospitals):
		queue, doctor_mean = sample_input(doctor_range, doctor_population_size, no_features)
		feature_map = np.concatenate((np.array([queue]), doctor_mean, hospital_one_hot, category_one_hot, rate_one_hot))
		queues[i] = round(queue)
		times[i] = model.predict(feature_map.reshape(1,-1))
		np.roll(hospital_one_hot, 1)

	return times, queues