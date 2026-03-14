import Major from "./Major.js";
import Event from "./Event.js";

Major.hasMany(Event, {foreignKey: 'createdBy',onDelete:'CASCADE',onUpdate:'CASCADE',
    as: 'events'
});

Event.belongsTo(Major, {as: 'major'});

export {Major, Event}