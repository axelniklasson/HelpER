import numpy as np
from helpers import save_obj


def generate_time(samples, mean_wait_time_seconds=7200, std_wait_time_seconds=1800):
	return np.random.normal(mean_wait_time_seconds, std_wait_time_seconds, samples)


def generate_doctors(population_size, no_features=10):
	cov_matrix = 0.1 * np.eye(no_features, no_features)
	mean = 0.5 * np.ones(no_features)
	doctor_population = np.random.multivariate_normal(mean, cov_matrix, population_size)
	return doctor_population


def generate_hospitals(no_hospitals, doctor_range, doctor_population):
	np.random.shuffle(doctor_population)
	no_doctors = np.random.random_integers(doctor_range[0], doctor_range[1], 1)
	doctor_indices = np.arange(0, doctor_population.shape[0])
	choice = np.random.choice(doctor_indices, size=no_doctors, replace=False)
	doctor_set = doctor_population[choice, :]
	hospital = np.random.randint(0, no_hospitals)
	one_hot_hospitals = np.zeros(no_hospitals)
	one_hot_hospitals[hospital] = 1
	return one_hot_hospitals, doctor_set.mean(axis=0)


def generate_sample(doctor_population, no_hospitals, doctor_range, no_symptoms, no_rates):
	hospital_one_hot, doctor_mean = generate_hospitals(no_hospitals, doctor_range, doctor_population)
	symptom = generate_symptom(no_symptoms=no_symptoms, no_rates=no_rates)
	feature_map = np.concatenate((doctor_mean, symptom, hospital_one_hot))
	time = generate_time(1)
	return feature_map, time


def generate_symptom(no_symptoms, no_rates):
	symptom = np.zeros(no_symptoms)
	rate = np.zeros(no_rates)
	symptom[np.random.randint(0, symptom.shape[0])] = 1
	rate[np.random.randint(0, rate.shape[0])] = 1
	return np.concatenate((symptom, rate))


def generate_dataset():
	doctor_population_size = 1000
	no_features = 10
	no_hospitals = 3
	doctor_range = (10, 100)
	no_samples = 50000
	no_symptoms = 8
	no_rates = 4

	doctor_population = generate_doctors(population_size=doctor_population_size, no_features=no_features)

	feature_size = no_hospitals + no_features + no_symptoms + no_rates
	x = np.empty((no_samples, feature_size))
	y = np.empty(no_samples)
	for i in range(0, no_samples):
		x[i, :], y[i] = generate_sample(doctor_population, no_hospitals, doctor_range, no_symptoms, no_rates)

		if i % 1000 == 0:
			print('Done {} of {}'.format(i, no_samples))

	save_obj(x, 'x-50000-samples-11:42')
	save_obj(y, 'y-50000-samples-11:42')


if __name__ == '__main__':
	generate_dataset()