import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router";
import { useService } from "../providers/ServiceProvider";

function AddServiceComponent() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { setServices } = useService();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const submitData = {
      ...data,
      price: Number(data.price),
      userEmail: user.email,
    };

    try {
      await axiosSecure.post("/services/new-service", submitData);
      setServices((prev) => [...prev, submitData]);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="py-16 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto font-poppins px-6 w-full">
        <div className="bg-gray-100 w-full mt-12 py-14 space-y-8 px-6 rounded-md">
          <h1 className="text-4xl font-semibold border-b-4 text-black pb-2">
            Add New Service
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Service Image */}
            <div className="space-y-2">
              <label htmlFor="serviceImage" className="text-lg">
                Service Image URL
              </label>
              <input
                {...register("serviceImage", {
                  required: "Service image URL is required",
                })}
                type="text"
                id="serviceImage"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter service image URL"
              />
              {errors.serviceImage && (
                <p className="text-red-600">{errors.serviceImage.message}</p>
              )}
            </div>

            {/* Service Title */}
            <div className="space-y-2">
              <label htmlFor="serviceTitle" className="text-lg">
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
                id="serviceTitle"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter service title"
              />
              {errors.serviceTitle && (
                <p className="text-red-600">{errors.serviceTitle.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-lg">
                Company Name
              </label>
              <input
                {...register("companyName", {
                  required: "Company name is required",
                })}
                type="text"
                id="companyName"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter company name"
              />
              {errors.companyName && (
                <p className="text-red-600">{errors.companyName.message}</p>
              )}
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label htmlFor="website" className="text-lg">
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
                id="website"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter website URL"
              />
              {errors.website && (
                <p className="text-red-600">{errors.website.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label htmlFor="category" className="text-lg">
                Category
              </label>
              <select
                {...register("category", {
                  required: "Category is required",
                })}
                id="category"
                className="w-full bg-gray-200 px-3 py-2 rounded"
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

            {/* Price */}
            <div className="space-y-2">
              <label htmlFor="price" className="text-lg">
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
                id="price"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="text-red-600">{errors.price.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="description" className="text-lg">
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
                id="description"
                className="w-full bg-gray-200 px-3 py-2 rounded"
                placeholder="Enter service description"
                rows={4}
              />
              {errors.description && (
                <p className="text-red-600">{errors.description.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-white text-black text-lg font-semibold rounded hover:bg-black hover:text-white transition-colors duration-300 md:col-span-2 border-2 border-black"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddServiceComponent;
