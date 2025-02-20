//Fonction toSlug permet de générer un slug à partir d'une chaine de caractères passéee en paramètre.
//Slug employé dans l'URL afin d'identifier une ressource.
export function toSlug(chaine: string): string {
    
    let slug = chaine.toLowerCase().trim();
    slug = slug.normalize('NFD');
    slug = slug.replace(/[^\w\s-]/g, '');
    slug = slug.replace(/[\s_-]+/g, '-');
    return slug;
};