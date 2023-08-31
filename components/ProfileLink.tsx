const ProfileLink = ({
  index,
  name,
  url,
}: {
  index: string;
  name: string;
  url: string;
}) => (
  <div className="isolate relative max-w-[600px]">
    <div className="reversePullUp bg-cl4 text-cl3 w-full p-4 md:p-8">
      <h4 className="text-base md:text-2xl flex justify-between">
        {url ? (
          <a
            className="p-1 w-fit h-fit hover:underline grid grid-cols-[auto,auto] gap-x-3 items-center"
            href={url}
            target="_blank"
          >
            <i className={index}></i>
            {name}
          </a>
        ) : (
          <></>
        )}
      </h4>
    </div>
    <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-cl1 transition-transform" />
  </div>
);

export default ProfileLink;
