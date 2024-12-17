import { VehicleStatus } from '@green-ecolution/backend-client';

export const VehicleStatusOptions = [
    {
        value: VehicleStatus.VehicleStatusUnknown,
        color: 'grey',
        bgcolor: 'none',
        label: 'Unbekannt',
        description: 'Der Fahrzeugstatus ist unbekannt.',
    },
    {
        value: VehicleStatus.VehicleStatusNotAvailable,
        color: 'red',
        bgcolor: 'none',
        label: 'Nicht Verfügbar',
        description: 'Das Fahrzeug ist nicht verfügbar.',
    },
    {
        value: VehicleStatus.VehicleStatusAvailable,
        color: 'green-dark',
        bgcolor: 'none',
        label: 'Verfügbar',
        description: 'Das Fahrzeug ist verfügbar.',
    },
    {
        value: VehicleStatus.VehicleStatusActive,
        color: 'green-light',
        bgcolor: 'green-light-200',
        label: 'Im Einsatz',
        description: 'Das Fahrzeug ist im Einsatz.',
    },
];

export const getVehicleStatusDetails = (status: VehicleStatus) => {
    const match = VehicleStatusOptions.find(option => option.value === status);
    return match || VehicleStatusOptions.find(option => option.value === VehicleStatus.VehicleStatusUnknown);
};
