export default{
    chcity (state,city){
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {
            
        }

    }
}