//jshint esversion:6

import API from '@/services/API';

export default {
    getToDos() {
        return API().get('todo');
    }
};