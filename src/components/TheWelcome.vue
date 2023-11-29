<script setup></script>

<template>
  <div class="md:flex md:items-center md:justify-between my-8 text-center">
    <div class="min-w-0 flex-1">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        Chun's OC Generator
      </h2>
    </div>
  </div>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Species</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is the species of the character. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="species"
                name="species"
                autocomplete="species-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                v-for="(index, item) in species"
              >
                <option v-bind:key="index">{{ item }}</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Clothes</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What clothing will the character wear. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="clothes"
                name="clothes"
                autocomplete="clothes-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Details</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What little details will the character have. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="details"
                name="details"
                autocomplete="details-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Hair</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is the hair type of the character. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="hair"
                name="hair"
                autocomplete="hair-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Eyes</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What are the eye color of the character. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="eyes"
                name="eyes"
                autocomplete="eyes-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Skin Tone</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is Skin tone of the character? Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="skinTone"
                name="skin-tone"
                autocomplete="skin-tone"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">height</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is the height of the character. Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="height"
                name="height"
                autocomplete="height"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Build</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is the build of the character? Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="build"
                name="build"
                autocomplete="build"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Mood</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What is the mood of the character? Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="mood"
                name="mood"
                autocomplete="mood"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 textColor">Colors</h2>
        <p class="mt-1 textColor text-sm leading-6">
          What are the colors of the character? Select or Randomize
        </p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <select
                id="colors"
                name="colors"
                autocomplete="colors"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 textColor">Cancel</button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
  <div>
    <h1>Character</h1>
    <div></div>
  </div>
</template>
<style scoped></style>
