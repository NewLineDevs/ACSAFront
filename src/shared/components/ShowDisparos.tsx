import { useState, useEffect } from 'react'
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import axios from 'axios'
import { IDisparoDataProps } from '../interfaces/interfaces'
import { Loading } from './Loading'

export const ShowDisparos = () => {
    const [data, setData] = useState([])
    const [loading, setIsLoading] = useState(Boolean)
    const [form, setForm] = useState({
        csid: 0,
        codAlarme: 0,
        days: ''
    })
    useEffect(() => {
        const savedData = localStorage.getItem('disparosData')
        if (savedData) {
            setData(JSON.parse(savedData))
        }
    }, [])
    const sendDataToBackend = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post('http://127.0.0.1:3032/disparos', { form })
            setData(response.data)
            localStorage.setItem('disparosData', JSON.stringify(response.data))

            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }
    const handleDiasChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target instanceof HTMLInputElement) {
            setForm({ ...form, days: event.target.value })
        }
    }

    const handleCsidChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target instanceof HTMLInputElement) {
            setForm({ ...form, csid: parseInt(event.target.value, 10) })
        }
    }
    const handleCodAlarmeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target instanceof HTMLInputElement) {
            setForm({ ...form, codAlarme: parseInt(event.target.value, 10) })
        }
    }
    return (
        <Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>

                <Typography sx={{ marginBottom: '-10px' }}>
                    Insira os Dias
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Dias"
                    variant="standard"
                    size="small"
                    sx={{ width: '100px', margin: '0' }}

                    onChange={(event) => handleDiasChange(event)}
                />
                <Typography sx={{ marginBottom: '-10px' }}>
                    Insira o CSID
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="CSID"
                    variant="standard"
                    size="small"
                    sx={{ width: '100px', margin: '0' }}

                    onChange={(event) => handleCsidChange(event)}
                />
                <Typography sx={{ marginBottom: '-10px' }}>
                    Insira o Cod Alarme
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Alarme"
                    variant="standard"
                    size="small"
                    sx={{ width: '100px', margin: '0' }}

                    onChange={(event) => handleCodAlarmeChange(event)}
                />
                <Button variant='outlined' onClick={() => { sendDataToBackend() }} sx={{ margin: '0' }}>
                    Buscar
                </Button>
            </Box>

            <Box sx={{ border: 1, marginTop: '5px' }}>
                {loading ? (
                    <Box>
                        <Loading />
                    </Box>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>CONTA</TableCell>
                                    <TableCell>DISPREST</TableCell>
                                    <TableCell>EVENTO</TableCell>
                                    <TableCell>ZONA</TableCell>
                                    <TableCell>QUANTIDADE</TableCell>
                                    <TableCell>ARMARIO</TableCell>
                                    <TableCell>ULTIMOEVENTO</TableCell>
                                    <TableCell>DATAINICIAL</TableCell>
                                    <TableCell>DATAFINAL</TableCell>
                                    <TableCell>HORARIOINICIAL</TableCell>
                                    <TableCell>HORAFINAL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length === 0 ? (
                                    <TableRow key="no-data">
                                        <TableCell colSpan={11}>Nenhum dado encontrado!</TableCell>
                                    </TableRow>
                                ) : (
                                    data.map((item: IDisparoDataProps) => (
                                        <TableRow key={item.id} >
                                            <TableCell>{item.CONTA}</TableCell>
                                            <TableCell>{item.DispRest}</TableCell>
                                            <TableCell>{item.EVENTO}</TableCell>
                                            <TableCell>{item.ZONA}</TableCell>
                                            <TableCell>{item.QUANTIDADE}</TableCell>
                                            <TableCell>{item.ARMARIO}</TableCell>
                                            <TableCell>{item.ULTIMOEVENTO}</TableCell>
                                            <TableCell>{item.DataInicial}</TableCell>
                                            <TableCell>{item.DataFinal}</TableCell>
                                            <TableCell>{item.HoraInicial}</TableCell>
                                            <TableCell>{item.HoraFinal}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Stack>
    )
}