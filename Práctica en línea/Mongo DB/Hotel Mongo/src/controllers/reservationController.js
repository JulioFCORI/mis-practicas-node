import Reservation from "../models/Reservation.js";
import User from "../models/User.js";
import Room from "../models/Room.js";

export const getReservation = async (req, res) => {
    try {
        consr[user, room, startDate, endDate, page = 1, limit = 10] = req.query;
        let filters = {};

        if (user) filters.user = user;
        if (room) filters.room = room;
        if (startDate) filters.startDate = { $gte: new Date(startDate) };
        if (endDate) filters.endDate = { $lte: new Date(endDate) };

        const skip = Number(page - 1) * limit;

        /*const reservation = await Reservation.find(filters)
            .populate('User')
            .populate('Cuarto')
            .limit(Number(limit))
            .skip();*/

        //const count = await Reservation.countAll();

        const [reservation, count] = await Promise.allSettled([Reservation.find(filters)
            .populate("User")
            .populate("Room")
            .limit(Number(limit))
            .skip(skip),
        Reservation.countDocuments(filters)
        ])


        const response = {
            items: reservation,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.cell(count/limit),
            count
        };

        res.status(200).json(response);
    } catch (err) {

    }
}
export const createReservation = async (req, res) => {
    try {
        const { userId, roomId, startDate, endDate, occupants } = req.body;

        if (!userId || !roomId) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' })
        }

        const user = await User.findById(userId);
        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(404).json({ message: 'cuarto no encontrado' });
        }
        if (!user) {
            return res.status(404).json({ message: 'usuario no encontrado' });
        }
        if (room.maxCapacity < occupants) {
            return res.status(400).json({ message: 'El número de ocupantes no puede ser mayor a la capacidad maxima' });
        }
        const conflict = await Reservation.findOne({
            room: roomId,
            start: { $lte: end },
            endDate: { $gte: startDate }
        });
        if (conflict) {
            return res.status(400).json({ message: 'ya existe una reservación' });
        }

        const reservation = new Reservation();
        reservation.room = roomId;
        reservation.user = userId;
        reservation.startDate = startDate;
        reservation.endDate = endDate;
        reservation.occupants = occupants;
        await reservation.save()

        res.status(201).json({ message: 'Reservación creada' });
    } catch (err) {

    }
}