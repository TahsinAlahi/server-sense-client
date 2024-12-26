import { useForm } from "react-hook-form";

function UpdateServiceModal({ isOpen, service, onSave, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      serviceImage: service?.serviceImage || "",
      serviceTitle: service?.serviceTitle || "",
      companyName: service?.companyName || "",
      website: service?.website || "",
      category: service?.category || "",
      price: service?.price || "",
      description: service?.description || "",
    },
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Update Service</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Image URL
            </label>
            <input
              {...register("serviceImage", {
                required: "Service image URL is required",
              })}
              type="text"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter service image URL"
            />
            {errors.serviceImage && (
              <p className="text-red-600">{errors.serviceImage.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Title
            </label>
            <input
              {...register("serviceTitle", {
                required: "Service title is required",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters long",
                },
              })}
              type="text"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter service title"
            />
            {errors.serviceTitle && (
              <p className="text-red-600">{errors.serviceTitle.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              {...register("companyName", {
                required: "Company name is required",
              })}
              type="text"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter company name"
            />
            {errors.companyName && (
              <p className="text-red-600">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              {...register("website", {
                required: "Website is required",
                pattern: {
                  value: /^(https?:\/\/)?[\w.-]+(\.[a-z]{2,})+$/i,
                  message: "Enter a valid URL",
                },
              })}
              type="text"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter website URL"
            />
            {errors.website && (
              <p className="text-red-600">{errors.website.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              {...register("category", {
                required: "Category is required",
              })}
              className="mt-1 px-4 py-2 border rounded-md w-full"
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="travel">Travel</option>
            </select>
            {errors.category && (
              <p className="text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              {...register("price", {
                required: "Price is required",
                min: {
                  value: 0,
                  message: "Price must be a positive value",
                },
              })}
              type="number"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-600">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long",
                },
              })}
              rows={4}
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter service description"
            />
            {errors.description && (
              <p className="text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateServiceModal;
