export type HeaderProps = {
    handleCreateProject  : any,
    title   : string,
    setTitle  : any,
    loading    : boolean,
    setShowModal  : any,
    setIsPublic :any,
    isPublic  : boolean,
}


export type Props = {
  params: Promise<{ id: string }>;
};