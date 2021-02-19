const Ticket = function(name, owner, date_created, priority, description = ""){
    this.name = name; //required
    this.owner = owner; //required
    this.date_created = date_created; //required
    this.date_clode = ""; 
    this.time_opened = "";
    this.priority = priority; //required
    this.description = description;
} 

const INITIAL_STATE = {
    tickets_opened: [],
    tickets_for_review: [],
    tickets_closed: []
};

export const Tickets = (state = INITIAL_STATE, action)=>{

}