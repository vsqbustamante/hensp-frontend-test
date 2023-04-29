import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Chris 1: Por que usar esto en vez de axios?

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-dummy.hospitaldeespecialidades.com.sv/api",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
      transformResponse: (response) => {
        const token = response.token;
        if (token) {
          localStorage.setItem("token", token);
        }
        return response;
      },
    }),
    getMedications: builder.query({
      query: () => "/medicamentos",
      providesTags: ["Medications"],
    }),
    createMedication: builder.mutation({
      query: (newMedicate) => ({
        url: "/medicamentos",
        method: "POST",
        body: newMedicate,
      }),
      invalidatesTags: ["Medications"],
    }),
    updateMedication: builder.mutation({
      query: (updatedMedication) => ({
        url: `/medicamentos/${medicate.id}`, // Chris 2: medicate no existe
        method: "PUT",
        body: updatedMedication,
      }),
      invalidatesTags: ["Medications"],
    }),
    deleteMedication: builder.mutation({
      query: (id) => ({
        url: `/medicamentos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Medications"],
    }),
  }),
});

// Chris 3: Podrias explicarme que haces aca?

export const {
  useGetMedicationsQuery,
  useCreateMedicationMutation,
  useUpdateMedicationMutation,
  useDeleteMedicationMutation,
  useLoginUserMutation,
} = apiSlice;
