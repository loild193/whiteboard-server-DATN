import express from 'express'
import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { SOCKET_IO_EVENTS } from '@utils/constants'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

app.use(cors())

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
let connections: SocketType[] = []

io.on('connect', (socket) => {
  connections.push(socket)
  console.log(`${socket.id} has connected`)

  socket.on(SOCKET_IO_EVENTS.DRAW_END, (data) => {
    connections.map((connection) => {
      if (connection.id !== socket.id) {
        connection.emit(SOCKET_IO_EVENTS.ON_DRAW_END, data)
      }
    })
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} is disconnected`)
    connections = connections.filter((connection) => connection.id !== socket.id)
  })
})

const PORT = process.env.PORT ?? 8080
httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`))
