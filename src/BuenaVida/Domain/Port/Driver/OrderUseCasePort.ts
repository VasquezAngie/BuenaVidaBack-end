//import Order from '../../Order/Order'

export default interface OrderUseCasePort {
    getEstadoEnvio(): Promise<string>
}