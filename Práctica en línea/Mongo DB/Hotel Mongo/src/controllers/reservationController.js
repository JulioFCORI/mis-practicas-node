import Reservation from "../models/Reservation.js";
import User from "../models/User.js";
import Room from "../models/Room.js";
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
        const conflict = await Reservation.findOne({room:roomId,
            start:{$lte:end},
            endDate:{$gte:startDate}
        });
        if(conflict){
            return res.status(400).json({message: 'ya existe una reservación'});
        }

        const reservation = new Reservation();
        reservation.room = roomId;
        reservation.user = userId;
        reservation.startDate = startDate;
        reservation.endDate = endDate;
        reservation.occupants = occupants;
        await reservation.save()

        res.status(201).json({message:'Reservación creada'});
    } catch (err) {

    }
}