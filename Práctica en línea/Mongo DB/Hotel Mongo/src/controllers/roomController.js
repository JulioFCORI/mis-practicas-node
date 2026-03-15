import Room from "../models/Room.js";

export const getRoomById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'el id es requerido' });
        }
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: 'cuarto no encontrado' });
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });

    }
};

export const updateRoom = async (req, res) => {
    try {
        const id = req.params.id;
        const { type, number, capacity } = req.body;
        if (!id) {
            return res.status(400).json({ message: 'el id es requerido' });
        }
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: 'cuarto no encontrado' });
        }
        if (!type || !number || !capacity) {
            return res.status(404).json({ message: 'todos los campos son requeridos' });

        }

        if(type !== 'simple' && type !== 'family'){
            return res.status(400).json({message: "habitación no valida"});
        }
        room.type = type;
        room.number = number;
        room.capacity = capacity;
        await room.save();

        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });

    }
}