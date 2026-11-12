-- Only email and phone are required for new contact enquiries.
alter table public.leads
  add column if not exists phone text not null default '';

alter table public.leads
  alter column name drop not null,
  alter column service drop not null,
  alter column message drop not null,
  alter column phone drop default;

alter table public.leads
  drop constraint if exists leads_name_check,
  drop constraint if exists leads_service_check,
  drop constraint if exists leads_message_check;

alter table public.leads
  add constraint leads_name_check check (name is null or char_length(name) between 1 and 120),
  add constraint leads_service_check check (service is null or char_length(service) between 1 and 100),
  add constraint leads_message_check check (message is null or char_length(message) between 1 and 4000),
  add constraint leads_phone_check check (phone ~ '^\+91 [0-9]{10}$');
