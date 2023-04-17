import _ from 'lodash';

const data = [
    {
        username: 'nico',
        role: 'admin'
    },
    {
        username: 'luz',
        role: 'cajero'
    },
    {
        username: 'santiago',
        role: 'almacen'
    },
    {
        username: 'ana',
        role: 'cajero'
    },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);