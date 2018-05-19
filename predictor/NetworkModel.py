from sklearn.neural_network import MLPRegressor


class RegressionModel:

	model = None

	def __init__(self, no_hidden,):
		self.model = MLPRegressor(hidden_layer_sizes=(no_hidden, ),
		                          activation='relu',
		                          solver='adam',
		                          alpha=0.0001,
		                          batch_size='auto',
		                          learning_rate='constant',
		                          learning_rate_init=0.001,
		                          power_t=0.5,
		                          max_iter=750,
		                          shuffle=True,
		                          random_state=None,
		                          tol=0.0001,
		                          verbose=False,
		                          warm_start=False,
		                          momentum=0.9,
		                          nesterovs_momentum=True,
		                          early_stopping=False,
		                          validation_fraction=0.1,
		                          beta_1=0.9,
		                          beta_2=0.999,
		                          epsilon=1e-08)

	def train(self, X, y):
		self.model = self.model.fit(X, y)

	def predict(self, X):
		return self.model.predict(X)

	def score(self, X, y):
		return self.model.score(X, y)

