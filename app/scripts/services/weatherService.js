'use strict';

// WeatherService to fetch weather data
angular.module('weatherDashboardApp')
  .service('WeatherService', function ($http, $q) {
    // Base URL for the weather API
    const baseUrl = 'https://api.example.com/weather';

    // Function to get current weather for a given city
    this.getCurrentWeather = function(city) {
      const deferred = $q.defer();

      // Make an HTTP GET request to fetch current weather data
      $http.get(`${baseUrl}/current?city=${city}`)
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };

    // Function to get weather forecast for a given city
    this.getWeatherForecast = function(city) {
      const deferred = $q.defer();

      // Make an HTTP GET request to fetch weather forecast data
      $http.get(`${baseUrl}/forecast?city=${city}`)
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };
  });
