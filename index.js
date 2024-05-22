window.localStorageWithExpiry ={
    setItem: function(key,value,expiryTime){
        let ans ={
            value,
            expiryTime:Date.now()+expiryTime
        };
        localStorage.setItem(key,JSON.stringify(ans));
    },
    getItem: function(key){
        let data = localStorage.getItem(key);
        data=JSON.parse(data);
        if(data.expiryTime<=Date.now()){
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    },
    removeItem:function(key){
        localStorage.removeItem(key);
    },
    clear: function(){
        localStorage.clear();
    }
}
localStorageWithExpiry.setItem("abc","pqr",1000);
setTimeout(()=>{
    console.log(localStorageWithExpiry.getItem("abc"));
},1500)