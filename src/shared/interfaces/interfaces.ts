import { ReactNode } from 'react'

export interface ILayoutProps {
    children?: ReactNode
}
export interface IDisparosProps {
    children?: ReactNode
}
export interface IProvidenciasProps {
    children?: ReactNode
}
export interface IUltimoEventoProps {
    children?: ReactNode
}

export interface IHeaderProps {
    onClick?: () => void
}

export interface IDisparoDataProps {
    CONTA: string;
    DispRest: string;
    EVENTO: string;
    ZONA: string;
    QUANTIDADE: number;
    ARMARIO: string;
    ULTIMOEVENTO: string;
    DataInicial: string;
    DataFinal: string;
    HoraInicial: string;
    HoraFinal: string;
    id: number;
}
export interface IUltimoEventoDataProps {
    csid: string;
    Descricao: string;
    qualificador: number
    codigoalarme: number
    particao: number
    usuariozona: string
    DescricaoZona: string
    DataRecepcao: string
    Armario: string
    id: number
}
export interface IProvidenciasDataProps {
    csid: string;
    codigoalarme: number
    usuariozona: string
    Tratado: boolean
    qualificador: number
    Hora: string
    Descricao: string
    Monitor: string
    DataRecepcao: string
    DataProvidencia: string
    MINUTOS: number
    id: number
}
export interface IButtonProps {
    text: string
    onClick: () => void
    color: string
}