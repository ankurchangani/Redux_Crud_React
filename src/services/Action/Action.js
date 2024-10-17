export const employeedata = (data) => {
    return {
        type: 'emp',
        payload: data, 
    };
};
export const deleteEmployee = (id) => {
    return {
        type: 'delete_emp',
        payload: { id },
    };
};

export const loading = (isLoading) => {
    return {
        type: 'loading',
        payload: isLoading,
    };
};
 
export const async = (data) => {
    return (dispatch) => {
        dispatch(loading(true)); 

        setTimeout(() => {
            dispatch(employeedata(data)); 
            dispatch(loading(false)); 
        }, 2500); 
    };
};




 export const updateEmployee = (employee) => {
    return {
        type: 'update_emp',
        payload: employee,
    };
};