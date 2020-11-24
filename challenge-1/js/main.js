Vue.component('card-component', {
    template: `
    <div class="card bg-success">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text text-justify">{{description}}</p>
            </div>
        </div>
    `, 
    props:{
        title:{
            type:String,
            required:true,
            default:'Tanpa judul'
        },
        description:{
            type:String,
            required:true,
            default:'Tanpa description'
        }
    }
    
})