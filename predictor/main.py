import numpy as np
from helpers import load_obj
from NetworkModel import RegressionModel
from sklearn.kernel_ridge import KernelRidge

if __name__ == '__main__':
	x = load_obj('x-50000-samples-11:42')
	y = load_obj('y-50000-samples-11:42')

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

	#model = RegressionModel(no_hidden=200)
	model = KernelRidge()

	model.fit(x_train, y_train)

	print('Training score: {}'.format(model.score(x_train, y_train)))
	print('Testing score: {}'.format(model.score(x_test, y_test)))

	for i in range(0, 10):
		print('Predicted: {} True: {}'.format(model.predict(x_test[i].reshape(1,-1)), y_test[i]))
		print('')