import numpy as np
import scipy.linalg
from helpers import save_obj


def generate_queue(mean=20, std=5):
	return np.maximum(0, np.random.normal(mean, std))


def generate_time(samples, queue, doctor_mean, mean_wait_time_seconds=1800, std_wait_time_seconds=1200):
	norm = scipy.linalg.norm(doctor_mean)
	mean_wait_time_seconds = mean_wait_time_seconds * (1/norm) + (queue * 300)
	sample = np.random.normal(mean_wait_time_seconds, std_wait_time_seconds, samples)
	return sample


def generate_doctor_population(population_size, no_features=10):
	cov_matrix = 0.05 * np.eye(no_features, no_features)
	mean = 0.5 * np.ones(no_features)
	doctor_population = np.random.multivariate_normal(mean, cov_matrix, population_size)
	z = np.zeros_like(doctor_population)
	doctor_population = np.maximum(doctor_population, z)
	return doctor_population


def generate_hospital(no_hospitals):
	hospital = np.random.randint(0, no_hospitals)
	one_hot_hospitals = np.zeros(no_hospitals)
	one_hot_hospitals[hospital] = 1
	return one_hot_hospitals


def generate_doctors(doctor_range, doctor_population):
	np.random.shuffle(doctor_population)
	no_doctors = np.random.random_integers(doctor_range[0], doctor_range[1], 1)
	doctor_indices = np.arange(0, doctor_population.shape[0])
	choice = np.random.choice(doctor_indices, size=no_doctors, replace=False)
	doctor_set = doctor_population[choice, :]
	return doctor_set.mean(axis=0)


def generate_sample(doctor_population, no_hospitals, doctor_range, no_symptoms, no_rates):
	doctor_mean = generate_doctors(doctor_range, doctor_population)
	hospital_one_hot = generate_hospital(no_hospitals)
	symptom = generate_user_symptom(no_symptoms=no_symptoms, no_rates=no_rates)
	queue = generate_queue()
	feature_map = np.concatenate((np.array([queue]), doctor_mean, hospital_one_hot, symptom))
	time = generate_time(1, queue, doctor_mean)
	return feature_map, time


def generate_user_symptom(no_symptoms, no_rates):
	symptom = np.zeros(no_symptoms)
	rate = np.zeros(no_rates)
	symptom[np.random.randint(0, symptom.shape[0])] = 1
	rate[np.random.randint(0, rate.shape[0])] = 1
	return np.concatenate((symptom, rate))


def sample_input(doctor_range, doctor_population_size, no_doctor_features):
	doctor_population = generate_doctor_population(population_size=doctor_population_size, no_features=no_doctor_features)
	doctor_mean = generate_doctors(doctor_range, doctor_population)
	queue = generate_queue()
	return queue, doctor_mean


def generate_dataset(doctor_population_size, no_doctor_features, no_hospitals, no_doctors_range, no_samples, no_symptoms, no_rates, filename='samples'):
	doctor_population = generate_doctor_population(population_size=doctor_population_size, no_features=no_doctor_features)

	# The total feature size (the +1 is for the queue)
	feature_size = no_hospitals + no_doctor_features + no_symptoms + no_rates + 1

	x = np.empty((no_samples, feature_size))
	y = np.empty(no_samples)

	for i in range(0, no_samples):
		x[i, :], y[i] = generate_sample(doctor_population, no_hospitals, no_doctors_range, no_symptoms, no_rates)

		if i % 1000 == 0:
			print('Done {} of {}'.format(i, no_samples))

	save_obj(x, 'x' + filename)
	save_obj(y, 'y' + filename)