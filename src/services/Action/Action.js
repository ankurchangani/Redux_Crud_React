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
 export const updateEmployee = (employee) => {
    return {
        type: 'update_emp',
        payload: employee,
    };
};