/* eslint-disable */
import { observable, makeObservable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = [];
        this.length = 0;

        makeObservable(this, {
                list: observable,
                length: observable,
                checkItem: action,
                addItem: action,
                editItem: action,
                deleteItem: action
            })
            // your code here

    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (newItemName) => {
        let newItem = new Item(newItemName)
        this.list.push(newItem)
        this.length++;
    }
    editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    deleteItem = (itemName) => {
        let items = this.list.filter(i => i.name != itemName)
        this.list = items
    }
}