import { base } from '$app/paths';

// Ang function na ito ang magkakabit ng /m4yku-pf/ sa unahan ng lahat ng assets mo
export const asset = (path) => {
    // Siguraduhin na ang path ay nagsisimula sa /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // Professor's Note: Tinatanggal natin ang anumang aksidenteng '/static' 
    // dahil ang static folder ay ang root path na sa SvelteKit.
    const finalPath = cleanPath.replace(/^\/static/, '');
    
    return `${base}${finalPath}`;
};

// Pwede mo ring ilagay dito ang mga fixed paths para madaling tawagin
export const siteAssets = {
    // TAMA: Alisin ang 'static/' dito. Dapat ay '/me.png' lang.
    avatar: asset('/me.png'), 
    resume: asset('/resume.pdf'),
    favicon: asset('/favicon.png'),
    // TAMA: Alisin din ang 'static/' sa projects path.
    projectImg: (id) => asset(`/projects/project-${id}.jpg`)
};