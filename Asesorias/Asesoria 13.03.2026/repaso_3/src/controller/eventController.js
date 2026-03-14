import { Event, Major } from "../models";

export const getEvents = async (res, req) => {
  const events = await Event.findAll({
    Where: { active: true },
    attributes: ["eventId", "name", "description"],
    include:[{
        model: Major,
        as: 'major',
        attributes: ['name']
    }]
  });
  res.status(200).json(events);
};
