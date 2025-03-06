import Order from '../../Order/Order'

export default interface Casousoprueba {
    getOrder(): Promise<Order[]>
    //getMovieResume(): Promise<Movie[]>

}