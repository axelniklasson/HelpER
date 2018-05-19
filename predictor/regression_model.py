from sklearn.neural_network import MLPRegressor


class RegressionModel:

	model = None

	def __init__(self):
		self.model = MLPRegressor(hidden_layer_sizes=(300, ),
		                          activation='relu',
		                          solver='adam',
		                          alpha=0.001,
		                          batch_size=512,
		                          learning_rate='constant',
		                          learning_rate_init=1e-4,
		                          power_t=0.5,
		                          max_iter=750,
		                          shuffle=True,
		                          random_state=None,
		                          tol=1e-8,
		                          verbose=True,
		                          warm_start=False,
		                          momentum=0.9,
		                          nesterovs_momentum=True,
		                          early_stopping=False,
		                          validation_fraction=0.1,
		                          beta_1=0.9,
		                          beta_2=0.999,
		                          epsilon=1e-8)

	def fit(self, X, y):
		self.model = self.model.fit(X, y)

	def predict(self, X):
		return self.model.predict(X)

	def score(self, X, y):
		return self.model.score(X, y)

