import { useEffect, useState } from 'react'
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import axios from 'axios'
import { IProvidenciasDataProps } from '../interfaces/interfaces'
import { Loading } from './Loading'

export const ShowProvidencias = () => {
    const [data, setData] = useState([])
    const [loading, setIsLoading] = useState(Boolean)
    const [form, setForm] = useState({
        days: '',
        csid: '',
    })
    useEffect(() => {
        const savedData = localStorage.getItem('disparosProvidencias')
        if (savedData) {
            setData(JSON.parse(savedData))
        }
    }, [])
    const sendDataToBackend = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post('http://127.0.0.1:3032/providencias', { form })
            setData(response.data)
            localStorage.setItem('disparosProvidencias', JSON.stringify(response.data))
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
            setForm({ ...form, csid: String(event.target.value) })
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
                                    <TableCell>CSID</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>Código Alarme</TableCell>
                                    <TableCell>Usuário Zona</TableCell>
                                    <TableCell>Tratado</TableCell>
                                    <TableCell>Hora</TableCell>
                                    <TableCell>Qualificador</TableCell>
                                    <TableCell>Monitor</TableCell>
                                    <TableCell>Data Recepção</TableCell>
                                    <TableCell>Data Providência</TableCell>
                                    <TableCell>Minutos</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length === 0 ? (
                                    <TableRow key="no-data">
                                        <TableCell colSpan={11}>Nenhum dado encontrado!</TableCell>
                                    </TableRow>
                                ) : (
                                    data.map((item: IProvidenciasDataProps) => (
                                        <TableRow key={item.id} >
                                            <TableCell>{item.csid}</TableCell>
                                            <TableCell>{item.Descricao}</TableCell>
                                            <TableCell>{item.codigoalarme}</TableCell>
                                            <TableCell>{item.usuariozona}</TableCell>
                                            <TableCell>{item.Tratado ? 1 : 0}</TableCell>
                                            <TableCell>{item.Hora}</TableCell>
                                            <TableCell>{item.qualificador}</TableCell>

                                            <TableCell>{item.Monitor}</TableCell>
                                            <TableCell>{item.DataRecepcao}</TableCell>
                                            <TableCell>{item.DataProvidencia}</TableCell>
                                            <TableCell>{item.MINUTOS}</TableCell>
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