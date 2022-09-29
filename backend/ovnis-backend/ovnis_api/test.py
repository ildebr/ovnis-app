from opencage.geocoder import OpenCageGeocode
from pprint import pprint
apikey= "fad2643e67b04f0db38e567e50ac4c23"
geocoder = OpenCageGeocode(apikey)

results = geocoder.reverse_geocode(44.8303087,-0.5761911)

pprint(results)
print(results[0]['components']['country'])