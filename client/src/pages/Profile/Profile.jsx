import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { FormRow } from "../../components";

const Profile = () => {
  const { user } = useOutletContext();

  const { name, lastName, email, location, avatar } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <main className="min-h-screen p-lg md:p-xl flex justify-center">
      <div className="w-full max-w-3xl">
        <div className="mb-xl">
          <h1 className="text-h1 text-on-surface">Profile Settings</h1>
          <p className="mt-sm text-body text-tertiary">
            Manage your professional identity and contact preferences.
          </p>
        </div>

        <section className="profile-card">
          <Form
            method="post"
            className="bg-surface-bright space-y-8"
            encType="multipart/form-data"
          >
            <div className="profile-card-header">
              <div>
                <h2 className="text-h3 text-on-surface">
                  Personal Information
                </h2>
                <p className="mt-sm text-mono-data text-tertiary uppercase tracking-wider">
                  Publicly visible on job listings
                </p>
              </div>

              <label
                className="profile-avatar group cursor-pointer flex items-center justify-center bg-primary-container text-4xl font-black text-black uppercase"
                htmlFor="avatar"
              >
                {avatar ? (
                  <img
                    alt={`${name} ${lastName}`}
                    className="h-full w-full object-cover"
                    src={avatar}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary-container text-4xl font-black text-black">
                    {name?.charAt(0)?.toUpperCase()}
                    {lastName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 group-hover:flex">
                  <span className="material-symbols-outlined text-white">
                    add_a_photo
                  </span>
                </div>
                <input
                  accept="image/*"
                  className="sr-only"
                  id="avatar"
                  name="avatar"
                  type="file"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 p-lg">
              <FormRow
                type="text"
                name="name"
                defaultValue={name}
                labelText="First Name"
              />

              <FormRow
                type="text"
                name="lastName"
                defaultValue={lastName}
                labelText="Last Name"
              />
              <FormRow
                type="email"
                name="email"
                defaultValue={email}
                labelText="Email"
              />

              <FormRow
                type="text"
                name="location"
                defaultValue={location}
                dataIcon="location_on"
                labelText="Location"
              />
            </div>

            <div className="flex flex-col justify-end gap-md border-t-2 border-on-background pt-lg sm:flex-row p-lg">
              <button className="btn-profile-secondary" type="reset">
                Discard
              </button>
              <button
                className="btn-brutalist-action bg-primary-container px-8 py-3 text-on-surface brutalist-active disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
};

export default Profile;
