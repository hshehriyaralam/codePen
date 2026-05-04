export type HeaderProps = {
    handleCreateProject  : any,
    title   : string,
    setTitle  : any,
    loading    : boolean,
    setShowModal  : any,
}


export type Props = {
  params: Promise<{ id: string }>;
};