parts(alternator, rotor) :- rotor.
parts(alternator, stator) :- stator.
parts(alternator, diode_rectifier) :- diode_rectifier.
parts(alternator, ic_regulator) :- ic_regulator.
parts(alternator, carbon_brush) :- carbon_brush.
parts(battery) :- battery.
parts(fuel_pump) :- fuel_pump.
parts(carburetor) :- carburetor.
parts(ignition_coil) :- ignition_coil.
parts(distributor) :- distributor.
parts(spark_plug) :- spark_plug.



rotor :-
write('Replacing the old rotor with a brand new one or connect it to slip ring').

stator :- 
write('Replacing the whole stator with a brand new one or repair by rewinding'),
nl,
write('Steps for rewinding:'),
nl,
write('Step 1: Disconnect the magnet wire from the stator coil.'),
nl,
write('Step 2: Replace the magnet wire with a new one.').

diode_rectifier :-
write('Replace the Diode Rectifier with a brand new one').

ic_regulator :-
write('Replace the whole IC Regulator with a brand new one').

carbon_brush :-
write('Replace the whole Carbon Brush with a brand new one').

battery :-
write('Replace the battery with a brand new one').

fuel_pump :-
write('Replace the Fuel Pump with a brand new one').

carburetor :-
write('Clean all the parts of carburetor or replace a new one.').

ignition_coil :-
write('Replace the Ignition Coil with a brand new one').

distributor :-
write('Replace the Distributor with a brand new one').

spark_plug :-
write('Replace the Spark Plug with a brand new one').