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
	return one_hot_hospitals, doctor_set


def generate_sample(doctor_population, no_hospitals, doctor_range):
	hospital_one_hot, doctor_set = generate_hospitals(no_hospitals, doctor_range, doctor_population)
	symptom = generate_symptom()
	hospital_sympton_concat = np.concatenate((symptom, hospital_one_hot))
	repeated_symptoms = np.repeat(hospital_sympton_concat.reshape(1,-1), doctor_set.shape[0], axis=0)
	time = generate_time(1)
	return np.concatenate((doctor_set, repeated_symptoms), axis=1), time


def generate_symptom(no_symptoms=8, no_rates=4):
	symptom = np.zeros(no_symptoms)
	rate = np.zeros(no_rates)
	symptom[np.random.randint(0, symptom.shape[0])] = 1
	rate[np.random.randint(0, rate.shape[0])] = 1
	return np.concatenate((symptom, rate))


def generate_dataset():
	doctor_population = generate_doctors(population_size=1000, no_features=10)
	no_hospitals = 3
	doctor_range = (10, 100)
	no_samples = 50000

	samples = []
	for i in range(0, no_samples):
		x, y = generate_sample(doctor_population, no_hospitals, doctor_range)
		samples.append({'x': x, 'y': y})

		if i % 1000 == 0:
			print('Done {} of {}'.format(i, no_samples))

	save_obj(samples, '50000-samples-11:34')


if __name__ == '__main__':
	generate_dataset()