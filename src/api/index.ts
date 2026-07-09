import localAPI from './localAPI';
// import serverAPI from './serverAPI';

// const isLocal = import.meta.env.VITE_STATIC_BACKEND === 'true';

// const playersAPI = isLocal ? localAPI : serverAPI;

const playersAPI = localAPI;

export default playersAPI;
