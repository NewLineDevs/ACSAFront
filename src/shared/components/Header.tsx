import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isSmallScreen = useMediaQuery('(max-width: 404px)')

  const navigate = useNavigate()

  const handleClickDisparos = () => {
    navigate('/pagina-Disparos')
  }

  const handleClickProvidencias = () => {
    navigate('/pagina-providencias')
  }

  const handleClickUltimoEvento = () => {
    navigate('/pagina-ultimo-evento')
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        height: '90px',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <Typography variant={isMobile ? 'h5' : 'h3'}>
          ACS Acesso Web API
        </Typography>
        <Box
          sx={{ display: 'flex', marginLeft: 'auto', marginTop: isMobile ? '8px' : '0' }}
        >
          <Button
            sx={{
              marginBottom: isMobile || isSmallScreen ? '8px' : '0',
              marginRight: isMobile || isSmallScreen ? '0' : '8px',

            }}
            color="inherit"
            variant="outlined"
            onClick={handleClickDisparos}
          >
            Disparos
          </Button>
          <Button
            sx={{
              marginBottom: isMobile || isSmallScreen ? '8px' : '0',
              marginRight: isMobile || isSmallScreen ? '0' : '8px',

            }}
            color="inherit"
            variant="outlined"
            onClick={handleClickProvidencias}
          >
            Providencias
          </Button>
          <Button
            sx={{
              marginBottom: isMobile || isSmallScreen ? '8px' : '0',

            }}
            color="inherit"
            variant="outlined"
            onClick={handleClickUltimoEvento}
          >
            Ultimo Evento
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
