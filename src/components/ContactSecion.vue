<template>
    <AppSection class="contacts" id="contacts">
        <ContentLimiter>
            <SectionHeading>Contact me</SectionHeading>
        </ContentLimiter>
    </AppSection>
</template>

<script>
    import AppSection from './AppSection.vue';
    import ContentLimiter from './ContentLimiter.vue';
    import SectionHeading from './SectionHeading.vue';

    export default {
        name: "ContactSecion",
        components: {
            AppSection,
            SectionHeading,
            ContentLimiter,
        }
    }
</script>

<style></style>
