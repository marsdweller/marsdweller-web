Title: Exploratory Lab 2 - An Interactive Map of Airports and Flight Paths

![Screenshot 2023-03-31 153936](https://user-images.githubusercontent.com/122853939/229245380-bdc70f7b-2fbb-4533-80fa-88b0b2a98f76.jpg)

This map was designed for an audience that wishes to visualize flight paths of any given airports, such as those doing travel plans who wish to see potential routes and layover plans. The map interactively allows its users to input the IATA code for airports and serve up both an 'Origin' and 'Destination' locations. An additional button then allows the user to draw a flight path based on a great circle connecting the two locations. 

The map is served up on leaflet and combined with turf.js. The tileset I've chosen is dark and minimalistic, as airports and flight paths are often concerned with international boundaries and therefore are depicted on a small scale map. A major limitation of the map is restrictive nature of the tileset (by extension, the projection of the tileset), as certain great circles are limited by its boundaries. 

The data was obtained from the data catalog of The World Bank as a csv, then converted into a geoJSON file. Airport locations are hidden until input into the text boxes and called up in order to make the map easy to see. 
