import { toast } from "react-toastify";

const getStoredReadList = () => {
    //read list;
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}


const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'id already exist in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //ideally trigger toasted from the component;
        toast ('This book is added to your read list.')
        
    }
}


const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList() ;
    if(storedWishList.includes(id)){
        console.log(id, 'id already exist in the wish list');
    }
    else{
        storedWishList.push(id);
        const storedListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList }