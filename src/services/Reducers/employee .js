


const initialState = {
    employees: JSON.parse(localStorage.getItem('emp')) || [],
    employee: null,
    loading : false ,
};

const reducerEmployee = (state = initialState, action) => {
    switch (action.type) {
        case 'emp':
            console.log("Adding employee", action.payload);

            const newEmployee = {
                id: Math.floor(Math.random() * 1000000),
                ...action.payload,
            };

            const updatedEmployees = [...state.employees, newEmployee];
            localStorage.setItem('emp', JSON.stringify(updatedEmployees));

            console.log("Updated employee data", updatedEmployees);

            return {
                ...state,
                employees: updatedEmployees,
            };

            case 'loading':
            return {
                ...state,
                loading: action.payload,
            };

        case 'delete_emp':
            const deleteEmp = state.employees.filter(emp => emp.id !== action.payload.id);
            localStorage.setItem('emp', JSON.stringify(deleteEmp));

            return {
                ...state,
                employees: deleteEmp,
            };

        case 'update_emp':
            const updatedEmployeesList = state.employees.map(emp => 
                emp.id === action.payload.id ? { ...emp, ...action.payload } : emp
            );
            localStorage.setItem('emp', JSON.stringify(updatedEmployeesList));
            return {
                ...state,
                employees: updatedEmployeesList, 
            };

        default:
            return state;
    }
};

export default reducerEmployee;
