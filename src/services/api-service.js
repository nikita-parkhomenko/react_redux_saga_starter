
// outsource dependencies
import { push } from 'connected-react-router';
import { API_BASE, instance } from './axios-instance'

// local dependencies
import store from '../store';
import { TYPE } from '../reducers/app-reducer';


class ApiService {
    static getToken(user) {
        return instance.post(`/auth-service/auth/token`, user)
            .then(resp => {
                if (resp.status === 200) {
                    return resp;
                }
            })
            .catch(err => err);
    }
    static refreshToken() {
        let tokenData = null;

        if (localStorage.getItem('token')) {
            tokenData = JSON.parse(localStorage.getItem('token'));
        } else {
            store.dispatch(push('public/log-in'))
        }
        const { refreshToken } = tokenData;

        return instance({
                url: `${API_BASE}auth/token/refresh`,
                method: 'POST',
                data: { refreshToken },
                headers: {
                    Authorization: '',
                }
            })
            .then(response => response)
            .catch(({ message }) => store.dispatch({ type: TYPE.META, payload: { errorMessage: message } }));
    }

    static getUser() {
        return instance.get('/auth/users/me')
    }
    static getUsers() {
        return instance(`admin-service/users/filter`, {
            method: 'POST',
            data: {},
            params: {
                size: 10
            }
        });
    }
    static getRoles() {
        return instance(`admin-service/roles/filter`, {
            method: 'POST',
            data: {}
        })
    }

    static loadRoles(name) {
        return instance(`admin-service/roles/filter`, {
            method: 'POST',
            data: {
                name,
            }
        })
            .then(resp => resp.data.content)
            .then(roles => roles.map(
                role => ({ label: role.name, value: role.name, id: role.id, name: role.name })
            ))
    }

    static filterUsers(data, params) {
        return instance('admin-service/users/filter', {
            method: "POST",
            data,
            params,
        })
    }

    static createUser(user) {
        return instance('admin-service/users', {
            method: 'POST',
            data: user
        })
    }

    static editUser(user) {
        return instance('admin-service/users', {
            method: 'PUT',
            data: user
        })
    }

    static deleteUser(id) {
        return instance('admin-service/users', {
            method: 'DELETE',
            data: [{
                id,
            }]
        })
    }

    static getUserById(id) {
        return instance(`admin-service/users/${id}`, {
            method: "GET",
        })
    }

    static saveTokenToStorage(data) {
        localStorage.setItem('token', JSON.stringify(data));
    }

    static async getTokenFromStorage() {
        return await JSON.parse(localStorage.getItem('token'));
    }
}

export default ApiService;
