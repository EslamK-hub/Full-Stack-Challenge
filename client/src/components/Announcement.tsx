
interface AnnouncementProps {
    image: string;
    name: string;
    subject: string;
    post: string;
}

export default function Announcement({ image, name, subject, post }: AnnouncementProps) {
    return (
        <div>
            <img src={image} alt="Photo" loading="lazy" />
            <h4>
                {name}
                <br />
                <small>{subject}</small>
            </h4>
            <p>{post}</p>
        </div>
    );
}