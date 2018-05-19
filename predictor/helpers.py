import pickle


def save_obj(obj, name):
	with open('data/' + name + '.pkl', 'wb') as f:
		pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)


def load_obj(name):
	with open('data/' + name + '.pkl', 'rb') as f:
		return pickle.load(f)


def save(obj, name):
	with open(name, 'wb') as f:
		pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)


def load(name):
	with open(name, 'rb') as f:
		return pickle.load(f)


