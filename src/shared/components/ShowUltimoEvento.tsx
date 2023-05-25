import { useEffect, useState } from 'react'
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import axios from 'axios'
import { IUltimoEventoDataProps } from '../interfaces/interfaces'
import { Loading } from './Loading'

export const ShowUltimoEvento = () => {
    const [data, setData] = useState([])
    const [loading, setIsLoading] = useState(Boolean)
    const [days, setDays] = useState('')
    useEffect(() => {
        const savedData = localStorage.getItem('ultimoEventoData')
        if (savedData) {
            setData(JSON.parse(savedData))
        }
    }, [])
    const sendDiasToBackend = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post('http://127.0.0.1:3032/ultimoEvento', { days })
            setData(response.data)
            localStorage.setItem('ultimoEventoData', JSON.stringify(response.data));
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }
    const handleDiasChange = (event: any) => {
        setDays(event.target.value)
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
                    value={days}
                    onChange={handleDiasChange}
                />
                <Button variant='outlined' onClick={() => { sendDiasToBackend() }} sx={{ margin: '0' }}>
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
                                    <TableCell>Qualificador</TableCell>
                                    <TableCell>Código Alarme</TableCell>
                                    <TableCell>Partição</TableCell>
                                    <TableCell>Usuário Zona</TableCell>
                                    <TableCell>Descrição Zona</TableCell>
                                    <TableCell>Data Recepção</TableCell>
                                    <TableCell>Armário</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length === 0 ? (
                                    <TableRow key="no-data">
                                        <TableCell colSpan={9}>Nenhum dado encontrado!</TableCell>
                                    </TableRow>
                                ) : (
                                    data.map((item: IUltimoEventoDataProps) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.csid}</TableCell>
                                            <TableCell>{item.Descricao}</TableCell>
                                            <TableCell>{item.qualificador}</TableCell>
                                            <TableCell>{item.codigoalarme}</TableCell>
                                            <TableCell>{item.particao}</TableCell>
                                            <TableCell>{item.usuariozona}</TableCell>
                                            <TableCell>{item.DescricaoZona}</TableCell>
                                            <TableCell>{item.DataRecepcao}</TableCell>
                                            <TableCell>{item.Armario}</TableCell>
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