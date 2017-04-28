const USER_INFO = 'userInfo'
const API = 'http://localhost:8080'

const Tools = {
    checkStates: function (response) {
        if(response.ok){
            return response
        }else{
            let error = new Error(response.statusText);
            error.state = response.status;
            error.response = response;
            throw error;
        }
    },

    parseJSON:function (response) {
        return response.json();
    },

    getSearchFromObject:function(param, key) {
        if (param == null) return '';
        let _search = '?';
        for (let key in param) {
            _search += `${key}=${encodeURIComponent(param[key])}&`
        }
        return _search.slice(0, -1);
    },
}

/**
 * fetch请求数据Model
 * @param _method
 * @param _api
 * @param _params
 * @param _onSuccess
 * @param _onError
 * @private
 */
function _request (_method, _api, _params, _onSuccess, _onError) {
    let _options = {
        method:_method,
        mode:'cors',
        headers:{
          'Content-Type':'application/json',
        },
        body:(_method == 'GET')? null:JSON.stringify(_params)
    };
    if(_method.toLowerCase() == 'get'){
        _api += Tools.getSearchFromObject(_params)
    }
    fetch(_api,_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
          _onSuccess(data);
        })
        .catch((err)=>{
          _onError(err);
        })
}


const UserModel = {
    storeUser:(userInfo)=>{
        localStorage.setItem(USER_INFO,JSON.stringify(userInfo));
    },
    getUserInfo:()=>{
        return localStorage.getItem(USER_INFO) == '' ? '' : JSON.parse(localStorage.getItem(USER_INFO));
    },
    register:(_params,_success,_error)=>{
        _request('POST',`${API}/register`,_params,_success,_error)
    },
    login:(_params,_success,_error)=>{
        _request('POST',`${API}/login`,_params,_success,_error)
    },
    // getUserInfo:(_params,_success,_error)=>{
    //     _request('GET',`${API}user/getUserInfo`,_params,_success,_error);
    // },
}

const NewsModel={
    getNews:(param,success,error)=>{
      _request('GET', `${API}/news/get`, null, success, error)
    },
    giveStar:(_params,_success,_error)=>{
        _request('POST',`${API}article/giveStar`,_params,_success,_error)
    },
    comment:(_params,_success,_error)=>{
        _request('POST',`${API}article/comment`,_params,_success,_error)
    }
}

export {UserModel,NewsModel}
